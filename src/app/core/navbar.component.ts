import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public searchForm: FormGroup;
  public isInputShown: boolean;
  public toSubmit: boolean;
  public isAboutUsLinksShown: boolean;
  public toggleMenuBarsContent: boolean;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.createSearchForm();
  }

  ngOnInit() {
    this.isInputShown = false;
    this.toSubmit = false;
    this.isAboutUsLinksShown = false;
    this.toggleMenuBarsContent = false;
  }

  private createSearchForm() {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required ]
    });
  }

  public toggleInput() {
    this.isInputShown = !this.isInputShown;
  }

  public submitSearchForm() {
    console.log('submitting search form');
  }

  public showAboutUsLinks() {
    this.isAboutUsLinksShown = !this.isAboutUsLinksShown;
  }

  public toggleBarsContent() {
    this.toggleMenuBarsContent = !this.toggleMenuBarsContent;
  }

}
