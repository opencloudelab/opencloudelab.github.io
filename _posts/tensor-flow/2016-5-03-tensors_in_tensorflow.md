---
layout: post
title: Lab 3 Tensors in Tensor Flow  
categories: tensor-flow
author: Mitha Ann Philip
description: Tensors are multidimensional arrays/list of values. Computations are carried out using tensors. This is a practical guide with worked out basic examples that would help you familiarize with Tensor Flow.
---
## Introduction
Tensors are used to represent data in tensor flow. Computation graph uses these tensors to do the computations. There are different 
types of tensors and they can be defined using rank, shape and type. This section provides with a basic understanding of how to program 
using tensors in tensor flow. 

## Prequisites
We assume that tensor flow is installed successfully

## Example 1: 
### Welcome to Tensor Flow 
The objective of this program is to understand the basic structure of a simple tensor flow program.

##Example 2: 
### Basic Operations and Commands
The objective is to familiarize on different types of tensor that can be used in tensor flow.

## Example 3: 
### Steps to Generate tensor board

Tensor Board provides a visualization of the model that you create. It deals with 2 types of connections: Control dependency(denoted using dotted lines) and Data dependency(denoted using solid lines). To record the variations produced by a particular function, provide them as inputs to scalar_summary ops with a tag name. Histogram_summary provides the distribution of an output variable from a layer. tf.merge_all_summaries will merge the summaries created within the program, which is then directed to a summary_writer. Specify a logdir for summary writer to write the events.

Launch tensor board :
•run the command :   tensorboard --logdir = /tmp/mnist_logs 

•Open a browser and navigate to   http: (server):6006

## Example 4: 
### Objective of this program is to familiarize with tensor tranformation. 

## Example 5: 
### Logistic Regression 




