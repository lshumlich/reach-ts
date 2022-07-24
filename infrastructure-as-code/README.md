
## AWS Build and Deploy

This section describes how to setup the AWS build environment. Build and deploys
are done on specific branches: main, demo, and dev. 

To setup from scratch:

1. Setup a role with the appropriate permissions to own the build process.
    - using the AWS console setup a role called "build-role"
    - create a new policy called codebuild from codebuild-iam-role.json
    - attach the new policy and AmazonS3FullAccess to the new role
1. Setup s3 bucket 
    - edit create-deploy-s3-bucket.yml and set the BucketName
    - in the commands section (this doc) create-stack 
        - change the stack-name
        - change the file name
    - run the command for the correct profile
1. Setup build job
    - edit create-deploy-build.jml
        - change WebAppBucket value -> to bucket name
        - change GITHUB Location: -> to GitHub repository
        - change SourceVersion: -> to the branch name
    - in the commands section (this doc) create-stack 
        - change the stack-name
        - change the file name
    - run the command for the correct profile




- learn pre and post actions on GitHub
- run on actions: linting, typescript validation, prettyfieing. unit tests


## aws section
- setup cli and config jml and json
    - authentication
    - S3
    - [codebuild](https://docs.aws.amazon.com/cli/latest/reference/codebuild/create-project.html#examples)

## todo
- doing create codebuild cloudformation
- create cloudformation service role

## IaC file names Names

- create-deploy-service-role - (Big Note - Not done...)
- create-deploy-build - Create the s3 bucket to deploy in
- create-deploy-demo - Deployment auto

## Commands
```powershell
# list the s3 buckets (Note, user your profile: HighwoodAdmin LeanMindsDev)
aws s3 ls --profile LeanMindsDev

aws cloudformation create-stack `
    --stack-name demo-deploy-build `
    --template-body file://infrastructure-as-code/create-deploy-build.yml `
    --profile LeanMindsDev

aws cloudformation delete-stack `
    --stack-name demo-deploy-build `
    --profile LeanMindsDev

```