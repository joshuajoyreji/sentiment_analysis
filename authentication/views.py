from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.contrib.auth import get_user_model
User = get_user_model()
def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'message': 'Invalid credentials'}, status=400)

def signup_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')

        # Perform any additional validation or checks as needed
        # Create the user and save it to the database
        user = User.objects.create_user(username=username, password=password, email=email)
        return JsonResponse({'message': 'User created'})
