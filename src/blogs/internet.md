---
title: "Have you heard of the internet?"
date: "2024-09-15T10:00:00Z"
topics: "HTTP • TLS • Domains • DNS"
desc: "The internet connects devices via routers using standard protocols like HTTP for web traffic. SSL/TLS ensures secure connections. Domain names are translated to IP addresses by DNS, allowing users to navigate the web. Web servers host and serve content, while DNS caching speeds up performance by storing data closer to users."
---

## How does the internet work?

The internet is a network of networks. It works by connecting devices and computer systems together using a set of standardised internet protocols. The core of the internet is a global network of interconnected routers, which are responsible for directing traffic between different devices and systems. When you send data over the internet, it is broken up into small packets that are sent from your device to a router. The router examines the packet and forwards it to the next router in the path towards its destination. This process continues until the packet reaches its final destination.

To ensure that packets are sent and received correctly, the internet uses a variety of protocols, including the Internet Protocol (IP) and the Transmission Control Protocol (TCP). IP is responsible for routing packets to their correct destination, while TCP ensures that packets are transmitted reliably and in the correct order.

### Basic terms:

- **Packet**: A small unit of data that is transmitted over the internet
- **Router**: A device that directs packets of data between different networks.
- **IP Address**: A unique identifier assigned to each device on a network, used to route data to the correct destination.
- **Domain Name**: A human-readable name that is used to identify a website.
- **DNS**: The Domain Name System is responsible for translating domain names into IP addresses.
- **HTTP**: The Hypertext Transfer Protocol is used to transfer data between a client and a server.
- **HTTPS**: An encrypted version of HTTP that is used to provide secure communication between a client and a server.
- **SSL/TLS**: The Secure Sockets Layer and Transport Layer Security protocols are used to provide secure communication over the internet.

## What is HTTP?

HTTP (Hypertext Transfer Protocol) is a protocol used for transmitting hypertext via the internet. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands. HTTP operates on a request-response model: a client sends an HTTP request to a server for resources, such as web pages or files, and the server responds with the requested content and an HTTP status code indicating the result of the request. HTTP is stateless, meaning each request from a client to a server is independent and does not retain information about previous interactions.

### HTTP Request

A typical HTTP request contains:

- **HTTP Version Type**
- **URL**
- **HTTP Method**: The method indicates the action that the HTTP request expects from the queried server.
  - `GET`: requests a representation of the specified resource.
  - `HEAD`: request a response identical to the `GET` method, but without a response body.
  - `POST`: submits an entity to the specified resource.
  - `PUT`: replaces all current representations of the target resource with the request content.
  - `DELETE`: deletes the specified resource.
  - `CONNECT`: establishes a tunnel to the server identified by the target resource.
  - `OPTIONS`: describes the communication options for the target resource.
  - `TRACE`: performs a message loop-back test along the path to the target resource.
  - `PATCH`: applies partial modifications to a resource.
- **HTTP Request Headers**: HTTP headers contain text information stored in key-value pairs, and they are included in every HTTP request. These headers communicate core information, such as what browser the client is using and what data is being requested.
- **Optional HTTP Body**: The body of a request is the part that contains the `body` of information the request is transferring. The body of an HTTP request contains any information being submitted to the web server, such as a username and password, or any other data entered into a form.

### HTTP Response

A HTTP response is what clients receive in from the server in answer to a HTTP request. A typical HTTP response contains:

- **HTTP Status Code**: HTTP status codes are 3-digit codes most often used to indicate whether an HTTP request has been successfully completed.
  - 1xx - Informational
  - 2xx - Success
  - 3xx - Redirection
  - 4xx - Client Error
  - 5xx - Server Error
- **HTTP Response Headers**: Headers that convey important information such as the language and format of the data being sent in the response body.
- **Optional HTTP Body**: Successful HTTP responses to `GET` requests generally have a body which contains the requested information.

## What is SSL & TLS?

SSL (Secured Sockets Layer) refers to a protocol for encrypting, securing and authenticating communications on the internet. SSL has been replaced by an updated protocol called TLS (Transport Layer Security), however 'SSL' is still the commonly used word for this technology. The main use for SSL/TLS is to secure communications between a client and a server over unsecured networks.

### How does TLS work?

TLS accomplishes three key things:

- **Encryption**: Hides the data being transferred from third parties.
- **Authentication**: Ensures that the parties exchanging information are who they claim to be.
- **Integrity**: Verifies that the data has not been forged or tampered with.

A TLS connection is initiated using a sequence known as the TLS handshake. During the TLS handshake, the client and the server go through the following:

1. Specify which version of TLS they will use.
2. Decide on which cipher suites they will use.
3. Authenticate the identity of the server using the server's TLS certificate (SSL certificate).
4. Generate session keys for encrypting messages between them after the handshake is complete.

### Implementing TLS

HTTPS is an implementation of TLS encryption on top of the HTTP protocol. For a website or application to use TLS, it must have a TLS certificate installed on it's origin server (also known as a SLL certificate).
A TLS certificate is issued by a certificate authority to the person or business that owns the the domain. The certificate contains information on who owns the domain and the server's public key.

## What is a Domain Name?

A domain name us a human-readable address used to identify a specific location on the internet. It translates to an IP address, which is a numerical identifier used by computers to locate and connect to servers. Any internet connected computer can be reached through a public IP Address, either an IPv4 or an IPv6 address.

A domain name has a simple structure made of several parts, separated by dots, each providing extra information.

- **TLD (Top Level Domain)**: The rightmost part, indicating the type or location of the service (e.g., `.com`, `.org`, `.au`). Some TLDs have specific registration requirements.
- **Second-Level Domain (2LD)**: The part to the left of the TLD, typically representing the organization or brand (e.g., `example` in `example.com`).
- **Third-Level Domain (3LD)**: Also known as a subdomain, this is the part to the left of the 2LD, used for specific sections or services (e.g., `mail.example.com`).

### Who manages domain names?

Domain names are managed by domain registries, which oversee their availability and operation. Registrars are accredited by these registries to handle the registration and reservation of domain names for individuals or businesses.

## What is hosting?

Hosting refers to the service of providing server space and resources for storing and delivering website files and applications to users over the internet. There are various types of hosting, including shared hosting (where multiple websites share a single server), virtual private servers (VPS), dedicated hosting (where a single server is dedicated to one user), and cloud hosting (which uses a network of servers to provide scalable resources).

### What is a web server

A web server refers to hardware, software, or both, that serve web content to users and host websites. It processes client requests and delivers web pages, files, or applications over the internet.

- **Hardware**: A computer that stores web server software and a website's component files.
- **Software**: several parts that control how web users access hosted files.

To publish a website, you need either a static or a dynamic web server.

- **Static Web Server**: A computer with a HTTP server, that sends its hosted files as-is to the client.
- **Dynamic Web Server**: A static web server that contains extra software, most commonly an application server and
  a database. The application server updates the hosted files before sending content to your browse via the HTTP server. For example, to produce the final
  webpage sent to the client, the application server might fill an HTML template with content from a database.

## DNS and how it works?

The Domain Name System (DNS) translates domain names to IP addresses. Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses.

There are four DNS servers involved in loading a webpage:

- **DNS Recursor**: The DNS recursor is designed to receive queries from client machines through applications such as web browsers. Typically the recursor is then responsible for making additional requests in order to satisfy the client’s DNS query.
- **Root Name Sever**: The root server is the first step in resolving domain names into IP addresses.
- **TLD Name Server**: The top level domain server is the next step in the search for a specific IP address, and it hosts the TLD for a domain.
- **Authoritative Name Server**: This final name server is the last stop in the name server query. If the authoritative name server has access to the requested record, it will return the IP address for the requested hostname back to the DNS Recursor that made the initial request.

There are eight steps in a DNS lookup:

1. A user searches for a domain in a web browser, the query travels to the internet and is received by a DNS resolver.
2. The resolver queries a DNS root name server.
3. The root server the responds to the resolver with the address of a Top Level Domain (TLD) DNS server (such as `.com` or `.net`) which stores the information for it's domains.
4. The resolver then makes a request to that specific TLD server.
5. The TLD server then responds with the IP address of the domain's name server.
6. Lastly, the recursive resolver sends a query to the domain's name server.
7. The IP address is then returned to the resolver from the name server.
8. The DNS resolver then responds to the web browser with the IP address of the domain requested initially.

### DNS Caching

The purpose of caching is to temporarily stored data in a location that results in improvements in performance and reliability for data requests. DNS caching involves storing data closer to the requesting client so that the DNS query can be resolved earlier and additional queries further down the DNS lookup chain can be avoided, thereby improving load times and reducing bandwidth/CPU consumption. DNS data can be cached in a variety of locations, each of which will store DNS records for a set amount of time determined by a time-to-live (TTL).

## References

Roadmap.sh. ["Backend Developer Roadmap"](https://roadmap.sh/backend). Accessed on 15/09/2024.

Roadmap.sh. ["How does the internet work?"](https://roadmap.sh/guides/what-is-internet). Accessed on 15/09/2024.

CS FYI. ["How Does the Internet Work?"](https://cs.fyi/guide/how-does-internet-work). Accessed on 15/09/2024.

Cloudflare. ["What is HTTP?"](https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/). Accessed on 15/09/2024.

Mozilla Developer Network (MDN). ["An overview of HTTP"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview). Accessed on 15/09/2024.

Cloudflare. ["How does SSL work? | SSL certificates and TLS"](https://www.cloudflare.com/en-au/learning/ssl/how-does-ssl-work/). Accessed on 15/09/2024.

Cloudflare. ["What is TLS (Transport Layer Security)?"](https://www.cloudflare.com/en-au/learning/ssl/transport-layer-security-tls/). Accessed on 15/09/2024.

Mozilla Developer Network (MDN). ["What is a Domain Name?"](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name). Accessed on 15/09/2024.

Mozilla Developer Network (MDN). ["What is a Web Server?"](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server). Accessed on 15/09/2024.

Cloudflare. ["What is DNS? | How DNS works"](https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/). Accessed on 15/09/2024.

