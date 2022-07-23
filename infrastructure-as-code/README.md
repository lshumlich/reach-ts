
## GitHub section

to setup from scratch:
1. setup s3 bucket 
    - edit create-deploy-s3-bucket.yml and set the BucketName
    - in the commands section (this doc) create-stack 
        - change the stack-name
        - change the file name
    - run the command for the correct profile
2. setup build job
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