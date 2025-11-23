public class ApexClassProperties{

    public static void getterSetterMethod(){
        ApexClassPropertiesInnerCLass propObj= new ApexClassPropertiesInnerCLass();
        propObj.property=20;
        System.debug(propObj.property);
    } 
    //Inner Class
    public class ApexClassPropertiesInnerCLass{

        public integer property{
            get{
                return property;
            }
            set{
                property =value;
            }
        }

    }
}