from django.shortcuts import render


def index_view(request):
    context = {}
    template = 'index.html'

    return render(request, template, context)
