
## GitHub section
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

## Stack Names

- create-deploy-service-role - (Big Note - Not done...)
- create-deploy-s3-bucket - Create the s3 bucket to deploy in
- create-deploy-demo - Deployment auto

## Commands
```powershell
# list the s3 buckets (Note, user your profile: HighwoodAdmin LeanMindsDev)
aws s3 ls --profile LeanMindsDev

aws cloudformation create-stack `
    --stack-name s3-bucket `
    --template-body file://infrastructure-as-code/s3-bucket.yml `
    --profile LeanMindsDev

aws cloudformation delete-stack `
    --stack-name s3-bucket `
    --profile LeanMindsDev

```