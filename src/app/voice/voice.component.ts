import { Component, OnInit } from '@angular/core';
import { VoiceRecService } from '../service/voice-rec.service'

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css'],
  providers : [VoiceRecService]
})


export class VoiceComponent implements OnInit {

  constructor(
    public service : VoiceRecService
  ) { 
    this.service.init()
   }

  ngOnInit(): void {
  }

  startService(){
    this.service.start()
  }

  stopService(){
    this.service.stop()
  }

}
