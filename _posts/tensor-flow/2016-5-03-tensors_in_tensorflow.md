---
layout: post
title: Lab 3 Tensors in Tensor Flow  
categories: tensor-flow
author: Mitha Ann Philip
description: Tensors are multidimensional arrays/list of values. Computations are carried out using tensors. This is a practical guide with worked out basic examples that would help you familiarize with Tensor Flow.
---
## Introduction
Tensors are used to represent data in tensor flow. Computation graph uses these tensors to do the computations. There are different 
types of tensors and they can be defined using rank, shape and type. Every tensor flow program executes within a session and the variables are initialised  when the initialization command is run using the session. This section provides with a basic understanding on the structure of a tensor flow program, the basic types of tensors and also on tensor transformation.

## Prequisites
We assume that tensor flow is installed successfully

### Example 1: 

#### Welcome to Tensor Flow

The execution phase of a tensor flow program requires a session to be launched so that it executes every operation/node that were created using the tensor flow commands. The session will contain the resources used and the results obtained during the implementation. The objective of this program is to understand the basic structure of a simple tensor flow program.

### Example 2: 

#### Basic types of tensors and Commands
 Tensor flow uses different types of tensors to implement a neural network model. Every node that is created in tensor flow is assigned with a dedicated operation using the tensor flow commands. The basic types of tensors include:
 
 - Constant Tensor
 - Variable Tensor
 - Random Tensor
 - Placeholder Tensor
 
These tensors varies in its basic functionality. The objective of this program is to familiarize on different types of tensor and also on a couple of commands in tensor flow.

### Example 3: 

#### Tensor Tranformation

Tensors are used to do computations in tensor flow. Every tensor is described using rank,shape and type. There are varied tensor flow commands like slice that can be used to alter the shape of the input tensor. Slice command will slice a part of the tensor from the input tensor. Objective of this program is to familiarize with tensors and also tensor tranformation slice command.

### Example 4: 

#### Tensor Board

Tensor Board provides a visualization of the model that you create. It deals with 2 types of connections: Control dependency(denoted using dotted lines) and Data dependency(denoted using solid lines). To record the variations produced by a particular function, provide them as inputs to scalar summary ops with a tag name. Histogram summary provides the distribution of an output variable from a layer. tf.merge_all_summaries will merge the summaries created within the program, which is then directed to a summary_writer. Using the below command we specify a logdir for summary writer to write the events. 

To generate graph using tensor board : 


 *Step 1*: Execute the tensor flow program

 *Step 2*: Run the command:
 
               
                tensorboard --logdir = /tmp/mnist_logs 
                

 *Step 3*:  Navigate to :
                
               http: //<server IP address>:6006
               


