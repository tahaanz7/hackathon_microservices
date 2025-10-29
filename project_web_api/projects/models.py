from django.db import models

class Projet(models.Model):
    
    title = models.CharField(max_length=100)
    desc = models.TextField()

      
    STATUT_CHOICES = [
        ('soumis', 'Soumis'),
        ('en_cours', 'En cours'),
        ('evalue', 'Évalué'),
    ]
    statut = models.CharField(max_length=20, choices=STATUT_CHOICES, default='soumis')
    
    note_finale = models.FloatField(blank=True, null=True)
    date_soumission = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    

    
    lien_github = models.URLField(max_length=255, blank=True, null=True)
    lien_figma = models.URLField(max_length=255, blank=True, null=True)
    lien_presentation = models.URLField(max_length=255, blank=True, null=True)

   
  
   

    # Metadata
   

    def __str__(self):
        return self.title

