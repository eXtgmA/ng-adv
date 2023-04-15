import { Topic } from "../topic/topic";

export class Skill {
  id: number;
  topicId: number;
  topic?: Topic;
  name: string;
  hours: number;
  completed: boolean;
  duedate: Date;
}
