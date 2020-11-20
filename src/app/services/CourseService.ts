import {Injectable} from "@angular/core";

@Injectable()
export class CourseService{
    findAllCourse = () =>
        fetch('http://blackboardbackend-env.eba-p33gbgvn.us-east-1.elasticbeanstalk.com/api/courses')
            .then(response => response.json())
}
