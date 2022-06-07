public class permutation {

    public static void perm(String str) {
        permPerm(str, "");
    }

    public static void permPerm(String str, String prefix) {
        if (str.length() == 0) {
            System.out.println(prefix);
        }
        else {
            for (int i = 0; i < str.length(); ++i) {
                //rem is the full str minus the character at i
                String rem = str.substring(0, i) + str.substring(i + 1);
                permPerm(rem, prefix + str.charAt(i));
            }
        }
    }
    public static void main(String[] args) {
        // Runtime: N!(N^2)
        String str = "cat";
        perm(str);
    }
}
