class Apiresponse{
    constructor(statusCode, data, message="Suceess")
    {
        this .statusCode=statusCode;
        this.data=data;
        this.message=message;
        this .statusCode=statusCode<400?"success":"fail"    ;

    }
}