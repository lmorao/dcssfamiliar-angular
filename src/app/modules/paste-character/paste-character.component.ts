import { Component, OnInit } from '@angular/core';
import { CfParserService } from '../../core/services/cf-parser.service'

@Component({
  selector: 'app-paste-character',
  templateUrl: './paste-character.component.html',
  styleUrls: ['./paste-character.component.sass']
})
export class PasteCharacterComponent implements OnInit {

  model = {name : ""}
  tryParser () {
    var temp = this.parserService.parseCharacterFile(this.model.name)
    this.model.name = ""
  }
  constructor(
    private parserService: CfParserService,
  ) { }

  ngOnInit() {
  }

}
