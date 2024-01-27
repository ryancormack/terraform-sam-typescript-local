module "api_demo" {
  source      = "terraform-aws-modules/lambda/aws"
  version     = "~> 7.2"
  memory_size = 512
  source_path = {
    path             = "../dist/",
    npm_requirements = "../package.json"
  }
  architectures       = ["arm64"]
  function_name       = "test"
  handler             = "index.handler"
  runtime             = "nodejs20.x"
  create_sam_metadata = true
}
