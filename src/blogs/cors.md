---
title: "Who the hell is CORs, and why is he breaking my website?"
date: "2024-03-10T10:00:00Z"
topics: "CORs • Same-Origin Policy • CSRF"
desc: "CORS is a web security feature that defines how sites with different domains are allowed to communicate. It allows servers to specify what sites are allowed to access their resources via HTTP headers."
---

## Introduction

What is CORS and why am I writing about it? Because it has been a thorn in my side for too long and I need a better understanding of how it works and how to avoid the error I am sure we have all encountered at least once…

![image](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/cors-error2.png)

The way I have come to understand CORS is that it is a single stage in a complex resolution to a simple problem. Sounds complicated, so let's break it down. The stages include the issue (CSRF), the resolution (SOP) and the relaxation of the resolution (CORS).

## 🚩The issue (CSRF)

The issue is cross-site request forgery (CSRF). CSRF is when a malicious site tricks your browser into making a cross-site request to a legitimate site that you are authenticated with. If you have an authentication cookie for the legitimate site, the cookie will be sent along with the request. So the malicious site can perform transactions on the legitimate site on your behalf, despite not having direct access to the authentication cookie.

> **Example**: You are currently logged into your online banking account, which uses a session cookie to authenticate your requests. You then access a malicious site that, unbeknownst to you, submits a hidden form that mimics the banking website's money transfer form. Because you are logged in to your banking account in the same browser session, your browser automatically includes your authentication cookie with the form submission. The banking website, seeing a legitimate request with your authentication cookie, processes the request as if it were initiated by you. Funds are transferred from your account to the destination specified in the malicious form and you just lost your life savings 😔.

## 🛠️The resolution (SOP)

To resolve this issue the same-origin policy (SOP) was created. SOP is a web browser security mechanism that aims to prevent websites from attacking each other by restricting how a resource loaded by one domain can interact with a resource from another domain. SOP allows a domain to issue requests to other domains, but not to access the responses unless the two URLs have the same protocol, port and host (the same origin). This essentially makes it impossible for a malicious site to make any requests to a legitimate site. However, this also makes it impossible for legitimate sites to make requests to other legitimate sites. Although a necessary safety feature, this can be problematic as legitimate modern applications often reference third-party APIs and resources that are not within their own domain.

## ⚙️The relaxation of the resolution (CORS)

CORS was created to maintain the security provided by the SOP but still allow applications to make legitimate requests to different domains. CORS achieves this by introducing additional HTTP headers that inform browsers about the permissions granted by servers to access their resources from other origins.

Suppose your website (https://your-site.com) needs to fetch data from an API hosted on a different domain (my-api.com). To enable this cross-origin communication, the API server must be configured to include CORS headers specifying https://your-site.com as an allowed origin.

1. **Server-side configuration:**
First, I must configure the cross-origin resource sharing (CORS) headers on my server by adding https://your-site.com to the allowed origins list. These CORS headers can also specify the allowed HTTP methods and headers.
```http
Access-Control-Allow-Origin: https://your-site.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
```
2. **Client-side request:**
Your site then creates a request to access resources from my API (my-api.com). This request includes the Origin header (https://your-site.com), which indicates the origin of the request.
```javascript
fetch('https://my-api.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error fetching data:', error));
```
3. **Server response:**
If the server accepts requests from the origin specified in the request header (https://your-site.com), it includes the Access-Control-Allow-Origin header in the response. The value of this header either matches the origin request header (https://your-site.com) or is a wildcard (*), indicating that the server accepts requests from any origin.
4. **Authorisation and access control:**
Upon receiving the CORS headers from the server, the browser checks if the origin of the front-end application (https://your-site.com) matches the allowed origins specified by the server (Access-Control-Allow-Origin header). If there is a match and the requested method and headers are allowed, the browser proceeds with the request.

## Conclusion

Although CORS and SOP provide important security protections, they are not sufficient on their own to ensure comprehensive security. CORS and SOP rely on both the client and server being correctly configured, malicious clients or servers could still manipulate requests outside of a browser environment or disable CORS on the server side. Therefore, additional security measures are still required such as input validation, authentication, and authorization checks, to ensure comprehensive protection against web threats.