#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkPipelinesPipelineStack } from '../lib/cdk-pipelines-pipeline-stack';

const app = new cdk.App();
new CdkPipelinesPipelineStack(app, 'CdkPipelinesPipelineStack',{
  env: { account: '495672770756', region: 'eu-west-1'},
});
