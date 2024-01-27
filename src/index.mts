import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda"

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log('Appears in the debug console. It behaves the same as when we invoke the function on AWS');

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Return what we want' }),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*",
            "Content-Type": "application/json"
        }
    }
}