---
layout: post
title:  "Automating our Home"
date:   2023-05-14 16:00:00 +1000
primary_image: "https://images.unsplash.com/photo-1586920740280-e7da670f7cb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80"
category: Technology
permalink: /home-automation
---

It is a work of science fiction, a house controlled purely by voice controls, futuristic dashboards and automation, however it is coming true. Smart homes, whilst generally a novelty are growing in popularity. 

![Home Assistant Dashboard](assets/images/2023-05-14/FinishedDashboard.png)
<span data-nosnippet class="caption">The final dashboard for home assistant</span>

Home assistant is an open source application which allows for users to setup their own smart home. It is primarily focused around automations, but also uses a dashboard in which users can manually control devices relating to their home. I decided to make use of an old raspberry pi 2 (now quite outdated) to setup this software, given that our house already has two google smart speakers and a selection of smart lights and blinds. 

The basic setup was super simple, downloading the disk image for Home Assistant OS (finding the version for the Raspberry Pi 2 was difficult though) and loading it onto a micro SD Card. The Raspberry Pi was then connected to power and ethernet, and it soon booted up.

The dashboard could then be loaded through a local web address. The setup of devices was incredibly easy for most of the devices, because they were automatically detected as being connected to the network (as well as the printer for some reason). There were some devices which needed a lot more work, namely the blinds. This was a test of my ability to read documentation and forum threads, to get some really sketchy solutions to work. 

I also decided to 3D print a Raspberry Pi case, to help improve the aesthetics of it and its airflow, because it was just sitting on the bench before with no flow under neath it. This was easy given there was an already available model online, which only required small changes. It did take a while to print though, taking two hours for the top segment (white), and three hours for the bottom segment (blue)

![Raspberry Pi Case](assets/images/2023-05-14/PiCase.jpeg)
<span data-nosnippet class="caption">The printed Raspberry Pi Case, with the Pi inside</span>