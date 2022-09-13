import React from 'react'
import { NotificationManager, NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Notificaciones() {

    const lanzarNotificacion = (tipo) => {
        return () => {
            switch (tipo) {
                case 'info':
                    NotificationManager.info(
                        "Esto es una notificacion info, para mas detalle pulsa aqui",
                        "Titulo",
                        1000,  // timeout para que desaparezca
                        () => {
                            alert("Ejecutandose funcion callback \n Informacion ampliada");
                        },
                        true);  // prioridad
                    break;
                case 'success':
                    NotificationManager.success( "Esto es una notificacion success");
                    break;
                case 'error':
                    NotificationManager.error( "Esto es una notificacion error");
                    break;
                case 'warning':
                    NotificationManager.warning( "Esto es una notificacion warning");
                    break;
            }
        }
    }

  return (
    <div>
        <button onClick={lanzarNotificacion('info')}>Notificacion Info</button>
        <button onClick={lanzarNotificacion('success')}>Notificacion Success</button>
        <button onClick={lanzarNotificacion('error')}>Notificacion Error</button>
        <button onClick={lanzarNotificacion('warning')}>Notificacion Warning</button>

        <div>
            <NotificationContainer />
        </div>
    </div>
  )
}

export default Notificaciones