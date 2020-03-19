import {Injectable} from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import {take, filter} from 'lodash';

const baseDir = 'src/data/data';

@Injectable()
export class MomentsService {
    getMoments(query): object[] {
        const {size} = query;

        const filePath = path.resolve(`${baseDir}.json`);

        if (size) {
            return take(JSON.parse(fs.readFileSync(filePath, 'utf8')).home_timeline, size);
        }
        return JSON.parse(fs.readFileSync(filePath, 'utf8')).home_timeline;
    }

    getMomentById(id): object {
        const filePath = path.resolve(`${baseDir}.json`);
        const allData = JSON.parse(fs.readFileSync(filePath, 'utf8')).home_timeline;
        return filter(allData, item => item.id === id)[0];
    }
}
