---
layout: post
title: Lab 3 Installing Docker Engine
categories: docker-containers
author: Aqsa Fatima
description: Docker Installation
---
#### We followed, abridged, and skipped around the guide laid out at: 
[https://docs.docker.com/](https://docs.docker.com/)

### Step 1: Update APT package index.
``` sh
sudo apt-get update 
```

### Step 2: Install Docker
``` sh
sudo apt-get install docker-engine
```

### Step 3: Start the docker daemon.
``` sh
sudo service docker start
```

