---
layout: post
title: Course 4 Running Ansible Playbooks.  
categories: 
author: 
description: This is the last step in Swift installation.
---

* * *
#### Course 4: Running Ansible Playbooks. 
* * *

After doing configuration chnages in swift.yml file in last tutorial, now we need to run ansible playbooks:

**We are still logged in as root on Swift Controller**

```sh
# cd  /opt/openstack-ansible/playbooks
```
Now we need to run 5 differnt ansible playbooks, these may take longer than shown in video. (Approximately 20-25 min).
```sh
# openstack-ansible setup-hosts.yml
```
```sh
# openstack-ansible haproxy-install.yml
```
```sh
# openstack-ansible setup-infrastructure.yml
```
```sh
# openstack-ansible os-keystone-install.yml
```
```sh
# openstack-ansible os-swift-install.yml
```

**Swift Installation is over, we will learn how to use swift in next video.**

* * *
