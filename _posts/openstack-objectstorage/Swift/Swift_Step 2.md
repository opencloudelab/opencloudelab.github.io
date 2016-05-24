---
layout: post
title: Course 2 Cloning few github Repositories.  
categories: 
author: 
description: In this tutorial we will clone OSCAR and Openstack-ansible github repositories.
---


* * *
#### Course 2: Cloning few github Repositories. 
* * *

After preparing drivers in last tutorial,now we will clone OSCAR and Openstack-ansible github repositories on Swift controller node:

**shh as root to Swift controller**

```sh
# cd /opt
```
Clone OSCAR github repository.
```sh
# git clone https://github.com/cloudandbigdatalab/OSCAR.git
```
**OSCAR** is nothing but **OpenStack Configuration for Acadamic Research.** 

It is designed to simplify the configuration of resources and OpenStack installation process. This project has scripts to configure the computing resources and prepare them for OpenStack deployment using OpenStack-Ansible, an official OpenStack project. This package also pulls stable version of the OpenStack-Ansible from github and edits the configuration files to match the configured environment.

[Visit this link to learn more about OSCAR ](https://github.com/cloudandbigdatalab/OpenStack-Projects/blob/master/sample.md)

```sh
# cd OSCAR/
```
```sh
# git checkout liberty
```
```sh
# mkdir /etc/oscar 
```
```sh
# cp oscar.conf.example  /etc/oscar/oscar.conf 
```
**We will add Controller and Storage node static IPs to OSCAR configuration file**
```sh
# nano /etc/oscar/oscar.conf 
```
```sh
# cd .. 
```
Clone Openstack-ansible github repository.
```sh
# git clone https://github.com/openstack/openstack-ansible.git
```
OpenStack-Ansible is an official OpenStack project which aims to deploy production environments from source in a way that makes it scalable while also being simple to operate, upgrade, and grow.

[Visit this link to learn more about Openstack-ansible](https://github.com/openstack/openstack-ansible.git)


```sh
# cd openstack-ansible/
```
```sh
# git checkout 12.0.12
```
```sh
# ./scripts/bootstrap-ansible.sh
```
```sh
# cd ../OSCAR/
```

* * *
