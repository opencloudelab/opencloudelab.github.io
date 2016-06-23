---
layout: post
title: Lab 2 Installation Steps for Tensor Flow  
categories: tensor-flow
author: Mitha Ann Philip
description: This tutorial will help you install Tensor Flow. The graphs in Tensor flow is generated using Tensor Board. The tutorial will also contain the steps to install tensor board as well. 
---
## Tensor Flow Installation
The different way to install tensor flow are provided (here)[https://www.tensorflow.org/versions/r0.9/get_started/os_setup.html#requirements].
This section deals with a step by step procedure to install tensor flow. 

#### *Step 1*: Install Pip 
Pip is a package management system. It helps to install and manage softwares that were built using Python.
Python-dev is a package that contains header files, default static library and development tools for Python modules.

```ssh
sudo apt-get install python-pip python-dev
```

#### *Step 2*: Install Tensor Flow 

```ssh
sudo pip install --upgrade https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-0.7.1-cp27-none-linux_x86_64.whl
```

#### *Step 3*: Install scipy, matplotlib packages 
Scipy is an opensource software library for scientific calculations and matlplotlib is a python 2D library to work with images and high quality plots.

```ssh 
sudo apt-get install python-scipy python-matplotlib git
```

#### *Step 4*: Clone tensor flow repository

```ssh
git clone https://github.com/tensorflow/tensorflow.git 
```

#### *Step 5*: Install Node.js-legacy npm package manager

```ssh 
sudo apt-get install nodejs nodejs-legacy npm
```
Computations are represented in graphs in tensor flow. The graphs are visualised using tensor board.

#### *Step 6*: Gulp Bower
Gulp is a task runner that takes care of tasks that includes javascripts or CSSfiles. 

```ssh 
sudo npm install -g gulp bower
```

#### *Step 7*: Go to directory:  tensorflow/tensorflow/tensorboard/

#### *Step 8*: npm install
NPM is Node Package Manager. It acts as a dependency manager.

```ssh 
npm install
```

#### *Step 9*: Install Bower
Bower is a package manager for the web, which installs the right versions of the packages you need and their dependencies.

```ssh
bower install
```
