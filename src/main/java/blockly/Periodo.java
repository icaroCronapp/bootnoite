package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Periodo {

public static final int TIMEOUT = 300;

/**
 *
 * @author Ícaro Antunes
 * @since 15/12/2023, 17:04:42
 *
 */
public static Var obterPeriodoAtivo() throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    return Var.VAR_NULL;
   }
 }.call();
}

}

