import { Component } from '@angular/core';
import { DataLocalService } from '../../service/data-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public localstorge: DataLocalService) {}

}
