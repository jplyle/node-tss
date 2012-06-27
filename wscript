
def set_options(opt):
  opt.tool_options("compiler_cxx")
  opt.tool_options("compiler_cc")

def configure(conf):
  conf.check_tool("compiler_cxx")
  conf.check_tool("compiler_cc")
  conf.check_tool("node_addon")
  conf.check(lib="tspi",libpath=["/usr/lib","/usr/local/lib"])

def build(bld):
  obj = bld.new_task_gen("cxx", "shlib", "node_addon")
  obj.cflags = ["-fPIC"]
  obj.cxxflags = ["-ltspi" "-fPIC"]
  obj.target = "tssbridge"
  obj.source = ["./src/attestation.c", "./src/tssbridge.cpp"]
  obj.uselib = "TSPI";
