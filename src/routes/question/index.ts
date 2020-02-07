import express, { Router, Request, Response } from "express";

export default class Question
{
  app: any
  constructor()
  {
    this.app = express();
  }
  public questionApi(): any
  {
    this.app.get('/', function (req: Request , res : Response) {
      res.json(
        {"response_code":0,"results":[{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"What name did &quot;Mario&quot;, from &quot;Super Mario Brothers&quot;, originally have?","correct_answer":"Ossan","incorrect_answers":["Jumpman","Mr. Video","Mario"]},{"category":"History","type":"multiple","difficulty":"medium","question":"The crown of the Empire State Building was originally built for what purpose?","correct_answer":"Airship Dock","incorrect_answers":["Lightning Rod","Antennae","Flag Pole"]},{"category":"Geography","type":"multiple","difficulty":"hard","question":"What is the name of one of the Neo-Aramaic languages spoken by the Jewish population from Northwestern Iraq?","correct_answer":"Lishana Deni","incorrect_answers":["Hulaul&aacute;","Lishan Didan","Chaldean Neo-Aramaic"]},{"category":"History","type":"multiple","difficulty":"easy","question":"Which famous world leader is famed for the saying, &quot;Let them eat cake&quot;, yet is rumored that he\/she never said it at all?","correct_answer":"Marie Antoinette","incorrect_answers":["Czar Nicholas II","Elizabeth I","Henry VIII"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"What is the main theme song of &quot;Sonic Adventure 2&quot;?","correct_answer":"Live and Learn","incorrect_answers":["Open Your Heart","Can You Feel the Sunshine?","His World"]},{"category":"Entertainment: Television","type":"multiple","difficulty":"easy","question":"On the show &quot;Rick and Morty&quot;, in episode &quot;Total Rickall&quot;, who was a parasite?","correct_answer":"Pencilvester","incorrect_answers":["Beth Smith","Summer Smith","Mr. Poopy Butthole"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"Which Canadian province has Charlottetown as its capital?","correct_answer":"Prince Edward Island","incorrect_answers":["Saskachewan","Northwest Terrirories","Ontario"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"hard","question":"What year was Min Yoongi from South Korea boy band &quot;BTS&quot; born in?","correct_answer":"1993","incorrect_answers":["1992","1995","1994"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What nuts are used in the production of marzipan?","correct_answer":"Almonds","incorrect_answers":["Peanuts","Walnuts","Pistachios"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"Which member of the British pop group &quot;The Spice Girls&quot; was known as Ginger Spice?","correct_answer":"Geri Halliwell","incorrect_answers":["Melanie Brown","Emma Bunton","Victoria Beckham"]}]}
      );
    });
    return this.app
  }
}




/*
const app = express();

app.get('/', function (req: Request , res : Response) {
  res.json(
    {"response_code":0,"results":[{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"What name did &quot;Mario&quot;, from &quot;Super Mario Brothers&quot;, originally have?","correct_answer":"Ossan","incorrect_answers":["Jumpman","Mr. Video","Mario"]},{"category":"History","type":"multiple","difficulty":"medium","question":"The crown of the Empire State Building was originally built for what purpose?","correct_answer":"Airship Dock","incorrect_answers":["Lightning Rod","Antennae","Flag Pole"]},{"category":"Geography","type":"multiple","difficulty":"hard","question":"What is the name of one of the Neo-Aramaic languages spoken by the Jewish population from Northwestern Iraq?","correct_answer":"Lishana Deni","incorrect_answers":["Hulaul&aacute;","Lishan Didan","Chaldean Neo-Aramaic"]},{"category":"History","type":"multiple","difficulty":"easy","question":"Which famous world leader is famed for the saying, &quot;Let them eat cake&quot;, yet is rumored that he\/she never said it at all?","correct_answer":"Marie Antoinette","incorrect_answers":["Czar Nicholas II","Elizabeth I","Henry VIII"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"What is the main theme song of &quot;Sonic Adventure 2&quot;?","correct_answer":"Live and Learn","incorrect_answers":["Open Your Heart","Can You Feel the Sunshine?","His World"]},{"category":"Entertainment: Television","type":"multiple","difficulty":"easy","question":"On the show &quot;Rick and Morty&quot;, in episode &quot;Total Rickall&quot;, who was a parasite?","correct_answer":"Pencilvester","incorrect_answers":["Beth Smith","Summer Smith","Mr. Poopy Butthole"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"Which Canadian province has Charlottetown as its capital?","correct_answer":"Prince Edward Island","incorrect_answers":["Saskachewan","Northwest Terrirories","Ontario"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"hard","question":"What year was Min Yoongi from South Korea boy band &quot;BTS&quot; born in?","correct_answer":"1993","incorrect_answers":["1992","1995","1994"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What nuts are used in the production of marzipan?","correct_answer":"Almonds","incorrect_answers":["Peanuts","Walnuts","Pistachios"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"Which member of the British pop group &quot;The Spice Girls&quot; was known as Ginger Spice?","correct_answer":"Geri Halliwell","incorrect_answers":["Melanie Brown","Emma Bunton","Victoria Beckham"]}]}
  );
});
export default app;

*/