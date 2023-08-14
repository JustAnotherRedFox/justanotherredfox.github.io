#include<iostream>
using std::cout;
using std::endl;

int main()
{
    // Density Test Materials
    float wood = 0.8;
    float iron = 7.8;
    float osmium = 22.3;
    float densitium = 32.4;
    float fabric = 0.7;
    // Pools 
    float hP = 100;    // health pool
    float dPl0 = 100;  // durability pool layer 0
    float dPl1 = 100;  // durability pool layer 1
    float dPl2 = 100;  // durability pool layer 2
    float dPl3 = 100;  // durability pool layer 3
    // Equations
    float rD = 200;    // raw damage
    float aD = wood;   // attack Density 
    float dEQ;       // durability Equation
    float hEQ;       // health Equation 
    float pA;        // pierce Absorption
    // Layers Array
    float dEQL[4] = {0, 0, 0, 0}; // density equation layer
    // Density Layers
    float dDL[4] = {wood, wood, fabric, osmium};      
        // defence density layer 0, Cover
        // defence density layer 1, Armor 
        // defence density layer 2, Over
        // defence density layer 3, Under 
    // Sockets
    int Sockets[4] = {1, 1, 1, 1}; //0=empty, 1=full
        // socket of layer 0, 
        // socket of layer 1, 
        // socket of layer 2, 
        // socket of layer 3,
    float difference[4] = {
        dDL[0] - aD, 
        dDL[1] - aD, 
        dDL[2] - aD, 
        dDL[3] - aD
        
    };
    
    
    for(int i = 0; i < 4; i++) {
        
        if (Sockets[i] == 0) {
            cout << "equip is empty" << endl;
            continue;
            
        } else if (difference[i] >= -1 && difference[i] <= 1) {
            pA = 50;    // if Density is the same, Absorption is 50%
            dEQ = rD - (pA * (rD / 100));
            hEQ = 0;
            
            dEQL[i] = dEQ;
            cout << "is equal" << endl;
            break;
        
        } else if (difference[i] > 1) {
            pA = (difference[i] / dDL[i]) * 100; //if density defence is inferior, the higher the number more damage pass to health pool 
            if (pA > 100) {pA = 100;}
            
            
            if (pA > 60) {
                dDL[i] = dEQ;
                break;
            }
            
            dEQ = rD - (pA * (rD / 100));
            hEQ = 0;
            
            dDL[i] = dEQ;
            cout << "is stronger" << pA << endl;
            
        } else if (difference[i] < -1) {
            
            
            
            pA = (abs(difference[i]) / dDL[i]) * 100; //if density of defence is superior, the more superior, higher Absorption 
            if (pA > 100) {pA = 100;}
            
            
            dEQ = rD + (pA * (rD / 100));
            hEQ = pA * (rD / 100);
            
            
            
                std::cout << "is weaker" << pA << std::endl;
                dEQL[i] = dEQ;
                
            
            
        }
        
        
  
        
    } // end for loop

    dPl0 = dPl0 - dEQL[0];
    dPl1 = dPl1 - dEQL[1];
    dPl2 = dPl2 - dEQL[2];
    dPl3 = dPl3 - dEQL[3];
    
    hP = hP - hEQ;
   
    std::cout << "L0 Durability Pool: " << dPl0 << std::endl;
    std::cout << "L1 Durability Pool: " << dPl1 << std::endl;
    std::cout << "L2 Durability Pool: " << dPl2 << std::endl;
    std::cout << "L3 Durability Pool: " << dPl3 << std::endl;
    std::cout << "Health Pool: " << hP << std::endl;
    
    return 0;
}