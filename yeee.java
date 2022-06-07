import java.util.*;

public class yeee {

    public static LinkedList<Integer> yoo(int one, int two) {
        LinkedList<Integer> list = new LinkedList<>();
        list.add(one);
        list.add(two);

        return list;
    }
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
        list.add(1);
        list.add(2);
        list.add(3);

        Hashtable<Integer, String> hashTable = new Hashtable<>();
        hashTable.put(1, "one");
        hashTable.put(3, "three");
        hashTable.put(2, "two");
        System.out.println(hashTable);
        System.out.println(hashTable.hashCode());
        System.out.println("get: " + hashTable.get(1));

        HashMap<Integer, String> hashMap = new HashMap<>();
        hashMap.put(1, "one");
        hashMap.put(2, "two");
        // hashMap.put(3, "three");

        HashMap<Integer, String> hashMap2 = new HashMap<>();
        // hashMap2.put(1, "one");
        // hashMap2.put(2, "two");
        hashMap2.put(3, "three");

        HashMap<Integer, String> hashMap3 = new HashMap<>();
        hashMap3.put(1, "one");
        hashMap3.put(3, "three");
        hashMap3.put(2, "two");

        System.out.println("hashcode");
        System.out.println(hashMap.hashCode());
        System.out.println(hashMap2.hashCode());
        System.out.println(hashMap2.hashCode() + hashMap.hashCode());
        System.out.println(hashMap3.hashCode());

        LinkedList<String> list1 = new LinkedList<>();
        list1.add("one");
        list1.add("two");
        list1.add("three");

        LinkedList<String> list2 = new LinkedList<>();
        list2.add("four");
        list2.add("five");
        list2.add("six");

        LinkedList<String> list3 = new LinkedList<>();
        list3.add("seven");
        list3.add("eight");
        list3.add("nine");

        HashMap<Integer,LinkedList<String>> hashList = new HashMap<>();
        hashList.put(1, list1);
        hashList.put(2, list2);
        hashList.put(3, list3);

        System.out.println("hashList");
        System.out.println(hashList);

        System.out.println(list);
        System.out.println(list.size());

        LinkedList<Integer> listYee = yoo(1, 2);
        System.out.println(listYee);

        int[] array = new int[5];
        System.out.println("array");
        System.out.println(array[3]);

        String name = "hello";
        System.out.println(name.hashCode());

        HashMap<String,Integer> hashName = new HashMap<>();
        hashName.put("hello", 5);
        System.out.println(hashName.hashCode());
        System.out.println(hashName.entrySet());
        System.out.println(hashName);

        Hashtable<String, String> tableBoi = new Hashtable<>();
        tableBoi.put("hello", "hello");
        tableBoi.put("hello", "goodbye");
        tableBoi.put("what", "what");
        tableBoi.put("where", "where");

        System.out.println();
        System.out.println("tableBoi");
        System.out.println(tableBoi);

        System.out.println();
        System.out.println("get size");
        System.out.println(tableBoi.size());

        System.out.println();
        System.out.println(tableBoi.remove("what"));
        System.out.println("get size again");
        System.out.println(tableBoi.size());
    }
}
