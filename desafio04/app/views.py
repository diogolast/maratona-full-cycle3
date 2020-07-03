from django.shortcuts import render

# Create your views here.
from app.models import Maratona


def aulas_list(request):
  aulas = Maratona.objects.all()
  return render(
    request,
    'aulas_list.html',
    {
      'aulas': aulas
    }
  )
