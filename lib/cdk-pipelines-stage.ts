import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { CdkPipelinesStack } from './cdk-pipelines-stack';

/**
 * Deployable unit of web service app
 */
export class CdkPipelinesStage extends Stage {
  public readonly urlOutput: CfnOutput;
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new CdkPipelinesStack(this, 'WebService');
    
    // Expose CdkPipelinesStack's output one level higher
    this.urlOutput = service.urlOutput;
  }
}
