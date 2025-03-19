import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  id?: number = 0;
  title: string = '';
  loading = false;
  formUser!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
) {};

ngOnInit() {
  this.id = this.route.snapshot.params['id'];
  
  this.formUser = this.formBuilder.group({
      id: [this.id],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required]
  });

  this.title = 'Add User';
  if (this.id != null && this.id > 0) {
      // edit mode
      this.title = 'Edit User';
      this.loading = true;
      this.userService.getUserById(this.id)
          .pipe(first())
          .subscribe(x => {
              this.formUser.patchValue(x);
              this.loading = false;
          });
  }
}

guardarUser() {

  // stop here if form is invalid
  if (this.formUser.invalid) {
      return;
  }

  this.saveUser()
      .pipe(first())
      .subscribe(
          () => {
              this.router.navigateByUrl('UsersList');
      });
};



private saveUser() {
  
  return this.id != null && this.id > 0
      ? this.userService.updateUser(this.formUser.value)
      : this.userService.addUser(this.formUser.value);
}


}