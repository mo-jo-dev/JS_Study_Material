/*
->How Web Works??
->What happens when we write "www.bookmyshow.com" in a search engine.

->Before anything, it is important that what is internet, as every information is there.
        -Internet is kind of Network, for understanding it, we need to understand computer network.
        -Computer Network: It is a group of interconnected computer systems.
        -Internet: It is a network of computer networks.
        -Protocols - Set of rules for communication. We have standardized protocols for different actions, as one country may have other protocol than other, so it is important to have a standardized protocol. E.g SMPT, HTTP, FTP etc
        -URL - Uniform Resource Locator. Special address given to a website which provides us with all the resources that it has.

(imp)   -DNS(Domain Name Server) - Mechanism which, for every URL stores an IP Address for it.
        -IP Address - Using which we can uniquely identify a network or a computer system.
        -Local Lookup and By the ISP - We have a local DNS in our computer device which stores our previously searched results, so first of all our request to search wents to it while ISP means that the DNS lookup is provided by Global internet service provider.
        -Earlier host.txt files used to be there which had the url and Ip Addresses.
        -cdn - _________ delivery network  

        -Client - We the end user that use electronic devices are knowns as the client 
        -Server - Software or hardware that can give us(client) a service.
        -Vertical Scaling - we can keep one system that is extremely powerful
        -Horizontal Scaling - not that powerful but are many
        -Load Balancer - Layer before servers that collects the requests and route those requests to the expected servers as per the load in a particular server.


        -For taking some info. by http, there must be a TCP connection between the client and the server
        -for watching a video, there is a UDP connection established

        -TCP - If the connection is lost than the previous information will be served continuously. E.g Match in Hotstar.
        -UDP - If the connection went and we werent able to communicate then that information is lost. E.g 968 ping in BGMI

        -Monolith - In one particular codebase, we have all of our logic
        -Microservice - Different services that can be handled at the same time. They can communicate with each other.


        ->How Front End is/can be optimized:
        -Minification - Optimization of our long long codes to prevent load in the frontend.
        -onCompressi - Image can be compressed for the smooth data load.
        -LazyLoading - Replace a heavy optimizing object with a placeholder.
        -Not Serve Everything in one go - Chat support can take some time to come.
        -Optimize Images - compress, correct size image should be shown.
        


->Breaking www.bookmyshow.com
        -www sends our request to the internet.(internet is global connection E.g-What we use while intranet is local connection E.g used by GOI)
        -DNS Lookup - We try to query that, for a particular URL, do we have IP Adress.



*/