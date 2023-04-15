import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Skill } from "./skills";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class SkillsService {
  constructor(private httpClient: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.httpClient
      .get<Skill[]>(environment.apiUrl + "skills")
      .pipe(tap(data => console.log("data from api", data)));
  }

  getSkill(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(environment.apiUrl + "skills" + id);
  }

  insertSkill(skill: Skill): Observable<any> {
    return this.httpClient.post<Skill>(environment.apiUrl + "skills", skill);
  }

  updateSkill(skill: Skill): Observable<any> {
    return this.httpClient.put<Skill>(environment.apiUrl + "skills", skill);
  }

  deleteSkill(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "skills" + id);
  }
}
