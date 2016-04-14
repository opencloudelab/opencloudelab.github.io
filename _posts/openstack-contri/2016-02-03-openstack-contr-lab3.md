---
layout: post
title: Lab 3 Setup Gerrit Account
categories: openstack-contri
---

## Setup Gerrit Account

Step 1 - Login to the Instance
  	ssh  <your_ip>

Step 2 - Create the SSH Key Pair

```sh
ssh-keygen -t rsa -b 4096 –C "email@example.com" -f ~/.ssh/gerrit
```

Step 3 - Setup the SSH Config

```sh
cat > ~/.ssh/config <<EOF
host review.openstack.org
HostName review.openstack.org
IdentityFile ~/.ssh/gerrit
EOF
```

Step 4 - Login to Gerrit

Step 5 - Choose Username on Gerrit

Step 6 - Submit Public SSH Key to Gerrit

Step 7 - Sign the Contributor License Agreement


