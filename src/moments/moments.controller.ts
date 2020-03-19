import {Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Query} from '@nestjs/common';
import {MomentsService} from "./moments/moments.service";

@Controller('moments')
export class MomentsController {
    constructor(private readonly momentsService: MomentsService) {}

    @Get()
    getMoments(@Query() query): object[] {
        return this.momentsService.getMoments(query);
    }

    @Get(':id')
    getMomentById(@Param('id', new ParseIntPipe()) id): object {
        if(this.momentsService.getMomentById(id)){
            return this.momentsService.getMomentById(id)
        }
        throw new HttpException('Id does not exist', HttpStatus.NOT_FOUND);
    }
}
