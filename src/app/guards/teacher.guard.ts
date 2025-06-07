import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const teacherGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  if (userService.userRole == 'teacher') {
    return true
  } else {
    alert('Sorry Boss!! This page is not for you.')
    return false;
  }
};
