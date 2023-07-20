package com.github.tommyettinger;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.digital.TextTools;

public final class Stringf {
    private Stringf(){}

    public String format(String fmt, Object... args) {
        int len = fmt.length(), arg = 0;
        StringBuilder sb = new StringBuilder(len);
        for (int i = 0; i < len; i++) {
            char curr = fmt.charAt(i);
            if(curr == '%') {
                curr = fmt.charAt(++i);
                if (curr == '%') {
                    sb.append('%');
                } else if (curr == 's') {
                    sb.append(args[arg++].toString());
                } else if (curr == 'd') {
                    sb.append(((Number) args[arg++]).longValue());
                } else if (curr == 'f') {
                    sb.append(TextTools.safeSubstring(Base.BASE10.decimal(((Number) args[arg++]).doubleValue()), 0, 5));
                } else if (curr == '0') {
                    curr = fmt.charAt(++i);
                    if(curr == 'X'){
                        Base.BASE16.appendUnsigned(sb, ((Number) args[arg++]).longValue());
                    }
                    else {
                        int length = Base.BASE10.readInt(fmt, i, len);
                        while ((curr = fmt.charAt(++i)) >= '0' && curr <= '9'){
                        }
                        if(curr == 'X')
                            sb.append(TextTools.safeSubstring(Base.BASE16.unsigned(((Number) args[arg++]).longValue()), 16 - length, 16));
                        else if(curr == 'd')
                        {
                            String num = Base.BASE10.unsigned(((Number) args[arg++]).longValue());
                            sb.append(TextTools.safeSubstring(num, num.length() - length, num.length()));
                        }
                    }
                } else if (curr >= '1' && curr <= '9') {
                    int length = Base.BASE10.readInt(fmt, i, len);
                    while ((curr = fmt.charAt(++i)) >= '0' && curr <= '9'){
                    }
                    if(curr == 'X')
                    {
                        String num = Base.BASE16.signed(((Number) args[arg++]).longValue());
                        sb.append(TextTools.safeSubstring(num, num.length() - length, num.length()));
                    }
                    else if(curr == 'd')
                    {
                        String num = Base.BASE10.signed(((Number) args[arg++]).longValue());
                        sb.append(TextTools.safeSubstring(num, num.length() - length, num.length()));
                    }
                }
            }
            else {
                sb.append(curr);
            }
        }
        return sb.toString();
    }
}
