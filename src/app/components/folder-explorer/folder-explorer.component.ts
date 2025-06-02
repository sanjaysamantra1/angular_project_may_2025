import { Component } from '@angular/core';

@Component({
  selector: 'app-folder-explorer',
  imports: [],
  templateUrl: './folder-explorer.component.html',
  styleUrl: './folder-explorer.component.css',
  inputs: ['folderObj']
})
export class FolderExplorerComponent {
  folderObj: any;
  isExpanded: boolean = false;
}
