#include<iostream>
#include <vector>

using namespace std;

int main()
{
    //Explanation: An Dynamic Array of Protection
        //Is Possible to Add or Remove Layers of Protection
        //Damage will go through all layers without enough defense,
        //but stop on defence enough
        //Is recomended to Index 0 be Skin(unremovable)
    float dam = 95;
    vector<float> def;
    def.push_back(3);  //underwear 
    def.push_back(8);  //clothes
    def.push_back(85); //armor
    def.push_back(0.5f); //cloak 
    
    int last = def.size() - 1; //2
    float new_dam, new_health;
    int id;
    
    for (int i = 0; i < def.size(); i++) {
        id = last - i;
        cout << "i: " << i << " id: " << id << endl;
        new_health = def[id] - dam; //-10
        new_dam = abs(new_health); //10
        
        
        if (new_health < 0) {
            new_health = 0;
     
            def[id] = new_health;
            
        }
    
        else if (new_dam >= 0) {
            def[id] = new_health;
        }
        
        dam = new_dam;
        
    
    }
    
    cout << "Last added Layer(Armor): " << def[last - 0] << endl; //last
    cout << "penultimate: " << def[last - 1] << endl;
    cout << "first added Layer(underwear): " << def[0] << endl; //first
    return 0;
}