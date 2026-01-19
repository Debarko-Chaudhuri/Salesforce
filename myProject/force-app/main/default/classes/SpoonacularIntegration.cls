public class SpoonacularIntegration {

    // Base URL of the Spoonacular API
    public static final String SPOONACULAR_API='https://api.spoonacular.com';
    // Your API key used to authenticate the API request
    public static final String API_KEY='f7447e8858944dada4e9256bae9c95fc';
    
    
    public static void getRecipe() {
        // Creates an Http object to send an HTTP request
        Http http = new Http();
        
        // Creates a new HTTP request to configure method, 
        //endpoint, headers, etc.
        HttpRequest request = new HttpRequest();
        
        // Sets the full URL for the request (base URL + endpoint + API key)        
        request.setEndpoint(SPOONACULAR_API+'/recipes/random?apiKey='+API_KEY);
        
        // Specifies the HTTP method as GET (used to retrieve data)
        request.setMethod('GET');
       
        // Sends the HTTP request and stores the API's response
        HttpResponse response = http.send(request);
        
        // Prints the status code to check if the request was successful
        System.debug('response code:'+response.getStatusCode());
        if(response.getStatusCode() == 200) {
            System.debug('response'+response.getBody());
            
        }
    }

    public static void getRecipeByIngrdients() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        
        // Sets the full URL for the request (base URL + endpoint + API key + &Parameters)        
        request.setEndpoint(SPOONACULAR_API+'/recipes/findByIngredients?apiKey='+API_KEY+'&ingredients=apples,+flour,+sugar&number=2');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        System.debug('response code:'+response.getStatusCode());
        if(response.getStatusCode() == 200) {
            System.debug('response'+response.getBody());
            
        }
    }
}