import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  standalone: true,
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  name: string = ''
  email: string = ''
  message: string = ''

  onSubmit() {
    console.log('Form submitted:', this.name, this.email, this.message);
  }
}
