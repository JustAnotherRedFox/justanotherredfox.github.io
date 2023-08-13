#include<iostream>
using std::cout;
using std::endl;

int main()
{
    float twol = 7.8;
    float onel = 0.9;
    
    float hp = 100;
    float rawDamage = 500;
    float rawDefence[4] = {100, 100, 100, 100}; //layers of defence
    float defencePenetration = onel;
    float damageAbsorption[4] = {twol, twol, twol, twol};
    float surplusDamage;
    
    damageAbsorption[0] -= defencePenetration;
    if(damageAbsorption[0] < 0){
        damageAbsorption[0] = 0;
    };
    
    rawDamage = rawDamage - (damageAbsorption[0] * (rawDamage / 100));
    
    rawDefence[0] -= rawDamage;
    
    for (int i = 0; i < 4; i++){
        if(rawDefence[i] < 0){
            surplusDamage = abs(rawDefence[i]);      
            rawDefence[i] = 0;
            
            
            if(i < 3){
                damageAbsorption[i+1] -= defencePenetration;
                if(damageAbsorption[i+1] < 0){
                    damageAbsorption[i+1] = 0;
                };
    
                surplusDamage = surplusDamage - (damageAbsorption[i+1] * (surplusDamage / 100));
                rawDefence[i+1] -= surplusDamage;
            
            } else {
                hp -= surplusDamage;
            };
        };
    };
  
    if (hp < 0) {
        std::cout << "you died, with a overplus of " << hp << " in damage" << endl;
        hp = 0;
    };
    
    std::cout << "first layer of defence: " << rawDefence[0] << std::endl;
    std::cout << "second layer of defence: " << rawDefence[1] << std::endl;
    std::cout << "third layer of defence: " << rawDefence[2] << std::endl;
    std::cout << "last layer of defence: " << rawDefence[3] << std::endl;
    std::cout << "health: " << hp;
    
    return 0;
}