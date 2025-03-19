import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { loadUsers } from 'src/app/states/actions/user.actions';
import { selectLoading } from 'src/app/states/selectors/users.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
loading$: Observable<boolean> = new Observable();
  users: User[] = [];

  constructor(
    private store: Store<any>, 
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit() {
    this.loading$ = this.store.select(selectLoading);

    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    });

    this.store.dispatch(loadUsers());
  }

  newUser(){
    this.router.navigate(['AddUser', 0]);
  }

  editUser(id: number){
    this.router.navigate(['AddUser', id]);
  }

  deleteUser(id: number, fullName: string){
    if(confirm('¿Confirma que desea eliminar al usuario ' + fullName + '?')){
      this.userService.deleteUser(id)
      .subscribe(
        response => {
          alert('El usuario ' + fullName + ' fue eliminado exitosamente!');
          this.ngOnInit();
        },
        error => {
          alert('Ocurrió un error y no se pudo eliminar al usuario' + fullName);
        }
      )}
  };

}
