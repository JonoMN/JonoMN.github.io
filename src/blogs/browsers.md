---
title: "What paint do Browsers use?"
date: "2024-09-21T10:00:00Z"
topics: "DNS Lookup • TCP & TLS • Critical Rendering Path"
desc: "When you load a webpage, the browser resolves the domain to an IP, establishes a connection, fetches the page’s data, builds the page structure (DOM and CSSOM), renders it on the screen, and finally makes it interactive for you to use."
---

## Step 1: Navigation

Navigation is the first step in loading a webpage, it occurs whenever a user takes an action such as clicking a link, entering a URL, submitting a form, etc.

### DNS Lookup

The first step of navigating to a web page is finding where the assets for that page are located.
The first step in loading a web page is determining where its assets are located, which involves resolving domain names to their corresponding IP addresses through DNS.

The Domain Name System (DNS) translates domain names into IP addresses, allowing devices to locate each other on the internet. Every device has a unique IP address, but DNS servers save us from having to remember these. Instead, we just use easy-to-remember domain names, and DNS handles the translation.

Once a DNS lookup is done, the IP is cached to speed up future requests. However, if a page pulls resources from different hostnames (like images, scripts, or ads), separate DNS lookups are needed for each, potentially slowing down the page load.

### TCP Handshake

Once the IP address is known, the browser sets up a connection to the server via a TCP three-way handshake. TCP's three-way handshake, known as "SYN, SYN-ACK, ACK," establishes a connection between two entities, such as a browser and a web server, before data transmission. First, the client sends a SYN (synchronize) message to initiate the connection. The server responds with a SYN-ACK (synchronize-acknowledge) to confirm. Finally, the client sends an ACK (acknowledge) to complete the handshake, and data transfer can begin.

This process negotiates the parameters of the TCP socket connection (the parameters ensure reliable, ordered data transfer between the browser and web server), commonly used in HTTPS communication.

### TLS Negotiation

The TLS negotiation, determines which cipher will be used to encrypt the communication, verifies the server, and establishes that a secure connection is in place before beginning the actual transfer of data.

## Step 2: Response

Once the connection to the web server is established, the browser sends an initial HTTP `GET` request. The server responds with the requested resource, usually the HTML file for the web page. This response may also include headers with important information, such as the content type, caching policies, and cookies.

**TTFB** (Time to First Byte) measures the time between the user's request and the moment the first byte of data, usually part of the HTML, is received from the server.

### Congestion Control / TCP Slow Start

TCP splits data into segments for transmission, and the server expects an ACK (acknowledgment) from the client after a certain number of segments. If the server waits for an ACK after each segment, it can slow down the transmission due to frequent client responses. Sending too many segments at once risks overwhelming the client, especially on a busy network, causing delays and requiring retransmissions.

To manage this, the TCP slow start algorithm gradually increases the amount of data sent, adjusting to the network's capacity. The number of segments sent is controlled by the congestion window (CWND), which starts small (1-10 MSS, where MSS is 1500 bytes) and doubles with each ACK received. If no ACK is received, the CWND is halved, balancing data flow and preventing congestion.

## Step 3: Parsing

Once the browser receives the first chunk of data, it can begin parsing the information received. Parsing is the step the browser takes to turn the data it receives over the network into the DOM (Document Object Model) and CSSOM (CSS Object Model), which is used by the renderer to paint a page to the screen.

This is the start of The Critical Rendering Path. The Critical Rendering Path is the sequence of five steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen.

### Building the DOM Tree (Document Object Model)

The first step in the Critical Rendering Path is processing the HTML markup and building the DOM tree. The DOM is an API that represents a HTML document as a tree of nodes, where each node corresponds to a part of the document. This node tree allows for dynamic interaction with the document—nodes can be created, modified, or moved. Event listeners can also be attached to nodes to trigger actions when specific events occur.

The DOM construction is incremental. The HTML response turns into tokens which turns into nodes which then turns into the DOM tree.The DOM is built incrementally as the HTML is parsed. HTML tags are turned into tokens, which become nodes that form the DOM tree. Each node starts with a start tag and ends with an end tag, containing all the element's relevant information. Nodes are organized into a hierarchy, with nested nodes representing elements inside other elements. This token hierarchy determines the structure of the DOM tree.

### Preload Scanner

Building the DOM tree occupies the main thread. As this occurs, the preload scanner will parse through the content available and request high priority resources like CSS, Javascript, and web fonts. Because of the preload scanner the browser doesn't have to wait until the parser finds a reference to an external resource to request it. It will retrieve resources in the background so that by the time the main HTML parser reaches the requested assets, they may already be in flight or have been downloaded.

### Building the CSSOM Tree (CSS Object Model)

The second step in the Critical Rendering Path is processing CSS and building the CSSOM tree. The CSSOM is an API that represents the CSS styles of a document as a tree of objects. Like the DOM, it enables dynamic interaction, allowing styles to be read, modified, or removed. In other words, just as the DOM allows a document’s structure and content to be manipulated via JavaScript, the CSSOM allows the document’s styling to be read and updated from JavaScript, enabling real-time changes to the page's appearance.

The browser converts the CSS rules into a map of styles. The browser goes through each rule set in the CSS, creating a tree of nodes with parent, child, and sibling relationships based on the CSS selectors. The browser begins with the most general rule applicable to a node and recursively refines the computed styles by applying more specific rules. In other words, it cascades the property values.

### Other Processes

#### Javascript compilation

While the CSS is being parsed and the CSSOM created, other assets, including JavaScript files, are downloading (thanks to the preload scanner). JavaScript is parsed, compiled, and interpreted. The scripts are parsed into abstract syntax trees.

#### Building the Accessibility Tree

The browser also builds an accessibility tree that assistive devices use to parse and interpret content. The accessibility object model (AOM) is like a semantic version of the DOM. The browser updates the accessibility tree when the DOM is updated.

## Step 4: Render

Rendering steps include style, layout, paint, and in some cases compositing. The CSSOM and DOM trees created in the parsing step are combined into a render tree which is then used to compute the layout of every visible element, which is then painted to the screen.

### Style

The third step in the Critical Rendering Path is combining the DOM and CSSOM into a render tree. The computed style tree, or render tree, construction starts with the root of the DOM tree, traversing each visible node. The render tree combines the DOM and CSSOM to capture both content and styles, matching up all the relevant styles to every visible node in the DOM tree, and determining, based on the CSS cascade, what the computed styles are for each node.. It includes only visible elements, so nodes like those in the `<head>` or elements with `display: none` are excluded. The browser builds the render tree by checking each DOM node, starting from the root, and applying relevant CSS rules.

### Layout

The fourth step in the Critical Rendering Path is running layout on the render tree to compute the geometry of each node.Once the render tree is built, layout becomes possible. Layout is dependent on the size of screen. The layout step determines where and how the elements are positioned on the page, determining the width and height of each element, and where they are in relation to each other. Layout happens every time a device is rotated or browser is otherwise resized.

### Paint

The final step in the Critical Rendering Path is painting, where the browser converts the render tree into actual pixels on the screen. After the render tree is built and the layout phase is complete, the browser paints the entire screen initially when the page loads.

As the user interacts with the page or content updates, the browser doesn't repaint the whole screen but only the areas affected by the changes, improving performance. For example, if only part of the page changes (like a button's color or text), the browser repaints just that section. This selective repainting is crucial for efficient rendering, as it reduces the workload and ensures smoother user experiences.

### Composting

When sections of the document are drawn in different layers, overlapping each other, compositing is necessary to ensure they are drawn to the screen in the right order and the content is rendered correctly.

## Step 5: Interactivity

Even after the page is painted, it may not be fully interactive if JavaScript is still running. If JavaScript was deferred until after the page load, the main thread might still be busy, delaying user interactions like scrolling or clicking.

Time to Interactive (TTI) measures how long it takes from the initial page request to when the page becomes responsive. If the main thread is tied up processing JavaScript, it can't respond quickly, delaying interactivity.

## References

Mozilla Developer Network (MDN). ["Critical Rendering Path"](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path). Accessed on 21/09/2024.

Mozilla Developer Network (MDN). ["Populating the page: how browsers work"](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work). Accessed on 21/09/2024.

Ramotion Blog. ["What is a Web browser? Definition, Types, and Features"](https://www.ramotion.com/blog/what-is-web-browser/). Accessed on 21/09/2024.
