import { Body, Controller, Get, HttpCode, Param, Post, Req, Res } from '@nestjs/common';
import {CategorieDTO} from "./DTO/categorie-dto";

@Controller("categories")
export class AppController {
  
  @Get()
  getAll(@Req() req:Request, @Res() res:Response){

  }


  @Post()
  saveCategorie(@Body() categorie: CategorieDTO ){
    return {
      sla: "slaaaaaaa"
    }
    
  }
  
  
}
