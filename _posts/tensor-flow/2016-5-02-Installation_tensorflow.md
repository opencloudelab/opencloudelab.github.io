---
layout: post
title: Lab 2 Installation steps for Tensor Flow  
categories: tensor-flow
author: Mitha Ann Philip
description: This tutorial takes you through the installation steps to install Tensor Flow.
---
## TENSOR FLOW INSTALLATION
This section deals with a step by step procedure to install tensor flow. 

Step 1: Install Pip 

```ssh
sudo apt-get install python-pip python-dev
```

Step 2: Install Tensor Flow 

```ssh
sudo pip install --upgrade https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-0.7.1-cp27-none-linux_x86_64.whl
```

Step 3: Install scipy, matplotlib packages 

```ssh 
sudo apt-get install python-scipy python-matplotlib git
```

Step 4: Install scikit-learn

```ssh
pip install -U scikit-learn
```

Step 5: Clone tensor flow repository

```ssh
git clone https://github.com/tensorflow/tensorflow.git 
```

Graphs in tensor flow requires tensor board. Steps 6 - 10 will install tensor board. 

Step 6: 

```ssh 
sudo apt-get install nodejs nodejs-legacy npm
```

Step 7: 

```ssh 
sudo npm install -g gulp bower
```

Step 8: Go to directory:  tensorflow/tensorflow/tensorboard/

Step 9: Execute command: 

```ssh 
npm install
```

Step 10: 

```ssh
bower install
```
