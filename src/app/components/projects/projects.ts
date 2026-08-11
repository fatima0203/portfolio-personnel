import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {

  private projectService = inject(ProjectService);
  private cdr = inject(ChangeDetectorRef);

  projects: Project[] = [];

  ngOnInit(): void {

    this.projectService.getProjects().subscribe({

      next: (data) => {

      console.log("Mes projets :", data);

      this.projects = data;

      this.cdr.detectChanges();

    },

    error: (err) => console.error(err)

  });

  }

}