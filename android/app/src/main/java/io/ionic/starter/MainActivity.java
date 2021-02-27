package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.interapptive.filesharer.FileSharerPlugin;
import com.interapptive.plugins.health.HealthPlugin;


public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    registerPlugin(HealthPlugin.class);
    registerPlugin(FileSharerPlugin.class);
  }
}
